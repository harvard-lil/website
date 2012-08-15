<form action="<?php echo home_url( '/' ); ?>" method="get" class="form-stacked">
    <fieldset>
		<div class="clearfix">
			<div class="input-prepend">
				<span class="add-on"></span>
				<input type="text" name="s" id="search" placeholder="<?php _e("Search","bonestheme"); ?>" value="<?php the_search_query(); ?>" />			
				<button type="submit" class="btn btn-primary"><?php _e("","bonestheme"); ?><i class="icon-search"></i></button>
			</div>
        </div>
    </fieldset>
</form>