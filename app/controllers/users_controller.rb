require 'pry'

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      sign_in(:user, user)
      redirect_to root_path
    else
      redirect_to new_user_path
    end
  end

  def login
    @user = User.new
  end

  def auth
    user = User.find_by(email: params[:user][:email])
    if user && user.valid_password?(params[:user][:password])
      sign_in(:user, user)
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  def logout
    session.clear
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
