module Api
  module V1
    class PasswordsController < Devise::PasswordsController
      respond_to :json

      # POST /api/v1/users/password
      def create
        self.resource = resource_class.send_reset_password_instructions(resource_params)
        if successfully_sent?(resource)
          render json: { message: "Email de réinitialisation envoyé." }, status: :ok
        else
          render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/users/password
      def update
        self.resource = resource_class.reset_password_by_token(resource_params)

        if resource.errors.empty?
          resource.unlock_access! if unlockable?(resource)
          resource.after_database_authentication
          render json: { message: "Mot de passe mis à jour avec succès." }, status: :ok
        else
          render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def unlockable?(resource)
        resource.respond_to?(:unlock_access!) &&
          resource.respond_to?(:unlock_strategy_enabled?) &&
          resource.unlock_strategy_enabled?(:email)
      end
    end
  end
end
