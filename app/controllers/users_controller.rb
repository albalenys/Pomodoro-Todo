class UsersController < ApplicationController
  before_filter :new_user, only: [:new, :login]

  def create
    user = User.new(user_params)
    if user.save
      sign_in(:user, user)
      redirect_to root_path
    else
      flash[:error] = user.errors.full_messages
      redirect_to new_user_path
    end
  end

  def auth
    user = User.find_by(email: params[:user][:email])
    if user && user.valid_password?(params[:user][:password])
      sign_in(:user, user)
      redirect_to root_path
    else
      flash[:error] = ["Invalid username and password combination."]
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

  def new_user
    @user = User.new
  end
end
