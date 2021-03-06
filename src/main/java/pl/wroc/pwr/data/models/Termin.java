package pl.wroc.pwr.data.models;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Termin {
	@Id
	@GeneratedValue
	private Long id;
	private Date od;
	private Date koniec;
	
	protected Termin(){}
	
	public Termin(Date od, Date koniec){
		this.od = od;
		this.koniec = koniec;
	}
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	public Date getOd() {
		return od;
	}
	public void setOd(Date od) {
		this.od = od;
	}
	public Date getKoniec() {
		return koniec;
	}
	public void setKoniec(Date koniec) {
		this.koniec = koniec;
	}
	
	

}