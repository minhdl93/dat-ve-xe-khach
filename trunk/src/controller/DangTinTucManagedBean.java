package controller;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import model.TinTuc;

import dao.TinTucDao;

@ManagedBean(name= "dangTinTucMBean")
@SessionScoped
public class DangTinTucManagedBean implements Serializable {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

		private TinTucDao tinTucDao=new TinTucDao();

		//Tra ve danh sach tin tuc tren giao dien news
		private List<TinTuc> DanhSach;

		//doi tuong tin tuc duoc chon
		private TinTuc selectedTinTuc=new TinTuc();
		
		//Trve danh sach tin tuc lien quan tren giao dien news
		private List<TinTuc> DanhSachLienQuan;


		public DangTinTucManagedBean(){
			DanhSach = new ArrayList<TinTuc>();
			DanhSach = tinTucDao.danhSachTinTuc();
		}

		public TinTucDao getTinTucDao() {
			return tinTucDao;
		}

		public void setTinTucDao(TinTucDao tinTucDao) {
			this.tinTucDao = tinTucDao;
		}

		public List<TinTuc> getDanhSach() {
			DanhSach = new ArrayList<TinTuc>();
			DanhSach = tinTucDao.danhSachTinTuc();
			return DanhSach;
		}

		public void setDanhSach(List<TinTuc> danhSach) {
			DanhSach = danhSach;
		}

		public TinTuc getSelectedTinTuc() {
			return selectedTinTuc;
		}

		public void setSelectedTinTuc(TinTuc selectedTinTuc) {
			this.selectedTinTuc = selectedTinTuc;
		}
		
		public List<TinTuc> getDanhSachLienQuan() {
			return DanhSachLienQuan;
		}

		public void setDanhSachLienQuan(List<TinTuc> danhSachLienQuan) {
			DanhSachLienQuan = danhSachLienQuan;
		}

		//Hien thi tin tuc dua vao doi tuong tin tuc duoc chon
		public String hienThiTin(TinTuc x){
			selectedTinTuc=x;
			DanhSachLienQuan = new ArrayList<TinTuc>();
			DanhSachLienQuan = tinTucDao.danhSachTinLienQuan();
			//Tra ve trang noi dung 1 tin tuc newsContent
			return "newsContent?faces-redirect=true";
		}	
	}
