<template>
	<div class="inner-wrap">
		<div class="page-insert">
			<div class="input-wrap">
				<div class="input-box">
					<b-form-input  />
				</div>
				<div class="btn btn-outline-primary">등록</div>
			</div>

			<div class="table-wrap">
				<table class="table">
					<colgroup>
						<col style="width: 100px;">
						<col>
						<col style="width: 250px;">
					</colgroup>
					<thead>
					<tr>
						<th scope="col">순번</th>
						<th scope="col">문장</th>
						<th scope="col">표시 일자</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>12</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
					</tr>
					<tr>
						<td>11</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
					</tr>
					<tr>
						<td>10</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>Not yet</td>
					</tr>
					<tr>
						<td>9</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>8</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>7</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>6</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>5</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>4</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>3</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>2</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					<tr>
						<td>1</td>
						<td>There are better starters than me but I’m a strong finisher.</td>
						<td>2021-08-13</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>

    export default {
        name: "Insert",
	    components: {

	    },
	    data () {

            return {}
	    }
    }
</script>

<style scoped>
	.input-wrap {
		display: flex;
		justify-content: space-between;
	}
	.input-box {
		min-width: 500px;
	}
	.table-wrap {
		padding: 30px 0;
	}
	.table tr th,
	.table tr td {
		text-align: center;
	}
	.table tr th {
		background-color: #ddd;
	}
</style>