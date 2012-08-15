				<div id="sidebar1" class="span2" role="complementary">
					
          		<ul class="nav">
            		<li><a href="http://hlsl7.law.harvard.edu/dev/jeff/site/index.html">Home</a></li>
            		<li><a href="http://hlsl7.law.harvard.edu/dev/jeff/site/about.html">About</a></li>
            		<li><a href="http://hlsl7.law.harvard.edu/dev/jeff/site/projects.html">Projects</a></li>
            		<li class="active"><a href="../../dev/blog/">Blog</a></li>
          		</ul>
        			
			<hr>
			<hr>	
			<p class="address"><span class="logotype-small">Harvard<br/>Library<br/>Innovation<br/> Lab</span><br/>Harvard Law School Library<br/>Langdell Hall<br/>Cambridge, MA 02138<br/><span class="cyan highlight">lil@law.harvard.edu</span></p>
	<hr>
		
	<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>

						<?php dynamic_sidebar( 'sidebar1' ); ?>

					<?php else : ?>

				

					<?php endif; ?>
		
		
				</div>