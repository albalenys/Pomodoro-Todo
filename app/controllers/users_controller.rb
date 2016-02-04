class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to "/"
    else
      "error"
    end
  end

  def login
    @user = User.new
  end

  def auth
    user = User.find_by(email: params[:email])
    if user
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
