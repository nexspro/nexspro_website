class Api::TestController < ApplicationController
  def ping
    render json: { message: "pong from Rails!" }
  end
end
