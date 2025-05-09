module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      private

      def sign_up_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end

      def respond_with(resource, _opts = {})
        if resource.persisted?
          render json: { message: "Signed Up.", user: resource }, status: :ok
        else
          render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
  end
end
