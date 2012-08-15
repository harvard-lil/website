<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage wpbootstrap
 * @since wpbootstrap 0.1
 */

get_header(); ?>
<div class="row">
  <div class="span4 columns">
		
        	<div class="navbar-inner">
          		<ul class="nav">
            		<li><a href="http://hlsl7.law.harvard.edu/dev/jeff/site/index.html">Home</a></li>
            		<li class="active"><a href="about.html">About</a></li>
            		<li><a href="projects.html">Projects</a></li>
            		<li><a href="../../blog/">Blog</a></li>
          		</ul>
        	</div><!--navbar-inner -->		
			<hr>
			<hr>	
			<p class="address"><span class="logotype-small">Harvard<br/>Library<br/>Innovation<br/> Lab</span><br/>Harvard Law School Library<br/>Langdell Hall<br/>Cambridge, MA 02138<br/><span class="cyan highlight">lil@law.harvard.edu</span></p>
			<hr>
			<hr>
			<iframe class="map" width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Harvard+Law+School,+Cambridge,+MA&amp;hl=en&amp;sll=37.0625,-95.677068&amp;sspn=53.961216,74.882813&amp;oq=harvard+law+scho&amp;hq=Harvard+Law+School,+Cambridge,+MA&amp;t=m&amp;ie=UTF8&amp;ll=42.379063,-71.119858&amp;spn=0.016485,0.032015&amp;output=embed"></iframe><br /><small><a class="" href="https://maps.google.com/maps?q=Harvard+Law+School,+Cambridge,+MA&amp;hl=en&amp;sll=37.0625,-95.677068&amp;sspn=53.961216,74.882813&amp;oq=harvard+law+scho&amp;hq=Harvard+Law+School,+Cambridge,+MA&amp;t=m&amp;ie=UTF8&amp;ll=42.379063,-71.119858&amp;spn=0.016485,0.032015&amp;source=embed" style="color:#999;text-align:left"><span class="logotype-small">+</span></a></small>
			<hr>				
			<a href="https://github.com/harvard-lil"><img class="octocat" src="img/octocat-small.png"/></a>		
			<hr>
			<div class="github"><h1 class="title center">github</h1></div>

		<?php get_sidebar(); ?>
  </div>
  <div class="span11 columns">
			<?php
			/* Run the loop to output the posts.
			 * If you want to overload this in a child theme then include a file
			 * called loop-index.php and that will be used instead.
			 */
			 get_template_part( 'loop', 'index' );
			?>
  </div>
</div>

<?php get_footer(); ?>