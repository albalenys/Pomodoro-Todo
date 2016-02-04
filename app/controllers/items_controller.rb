class ItemsController < ApplicationController
  def index
    @items = Item.where(user_id: session[:user_id])
  end

  def new
    @item = Item.new
  end

  def create
    item = Item.new(item_params.merge(user_id: session[:user_id]))
    if item.save
      redirect_to "/"
    else
      redirect_to new_item_path
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    if @item.update_attributes(item_params)
      redirect_to root_path
    else
      redirect_to edit_post_path(@item)
    end
  end

  private

  def item_params
    params.require(:item).permit(:text)
  end
end