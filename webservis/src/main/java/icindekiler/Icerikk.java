package icindekiler;


import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/menu")
public class Icerikk {
	@Path("/amenu")
	@GET
	@Produces("application/json")
	public List<String> aMenu() {
		List<String> d = new ArrayList<String>();
		d.add("içecek");
		d.add("yemek");

		return d;
	}

	@Path("/imenu/{ne}")
	@GET
	@Produces("application/json")
	public List<String> iMenu(@PathParam("ne")String ne) {
		System.out.println(ne);
		
		List<String> d = new ArrayList<String>();
		
		if (ne.equals("içecek")) {
			
			d.add("çay");
			d.add("meyve suyu");
			d.add("soda");
			d.add("kola");
			
		}
		else if (ne.equals("yemek")) {
			d.add("mantı");
			d.add("pilav");
			d.add("kavurma");
		}
		else
		{
			d.add("Seçim Yok!");
		}
		
		return d;
	}

}