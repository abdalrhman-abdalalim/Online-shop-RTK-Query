import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import axiosInstance from "../../../config/axios.config";
import { RootState } from "../../store";

interface ProductsState {
  loading: boolean;
  data: IProduct[];
  error: null;
}

// const [counter, setCounter] = useState(0)
const initialState: ProductsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: {
    [`${getProductList.pending}`]: (state) => {
      state.loading = true;
    },
    [`${getProductList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [`${getProductList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;
