const express = require('express');
const app = express();

app.get('/posts', function (req, res) {
    res.json([
        {
            id: 1, // 게시물 번호
            body: 'test',
            author: 'teset',
            createAt: new Date().getDate(),
        },
        {
            id: 2, // 게시물 번호
            body: 'test',
            author: 'teset',
            createAt: new Date().getDate(),
        },
        {
            id: 3, // 게시물 번호
            body: 'test',
            author: 'teset',
            createAt: new Date().getDate(),
        },
    ]);
});

app.get('/posts/:id', function (req, res) {
    res.json({
        id: req.params.id, // 게시물 번호
        body: 'test',
        author: 'teset',
        createAt: new Date().getDate(),
    });
});

app.delete('/posts/:id/replies/:re_id', function (req, res) {
    res.json({ msg: 'success' });
});


app.get('/users', function (req, res) {
    res.json([
        {
            userid: 1,
            email: "userid" + '@thedotio.com',
            phone: '010-0000-0000',
        },
        {
            userid: 2,
            email: "userid" + '@thedotio.com',
            phone: '010-0000-0000',
        },
        {
            userid: 3,
            email: "userid" + '@thedotio.com',
            phone: '010-0000-0000',
        },
    ]);
});

app.get('/users/:username', function (req, res) {
    res.json({
        username: req.params.username,
        email: req.params.username + '@thedotio.com',
        phone: '010-9242-9075',
        sex: 'male',
    });
});

app.delete('/users/:username', function (req, res) {
    res.json({ msg: 'success' });
});

// GET 127.0.0.1:8080/users : 회원 리스트 가져오기 (완)
// GET 127.0.0.1:8080/users/test : test 회원 정보 1개 가져오기 (완)
// DELETE 127.0.0.1:8080/users/paperlee : paperlee 회원 정보 1개 삭제하기 (완)

app.post('/posts/:id/replies/:reid', function (req, res) {
    res.json({
        id: req.params.id,
        post: "글내용" + req.params.id,
        re: "댓글" + req.params.reid,
    });
});

app.get('/posts/:id/replies/:reid', function (req, res) {
    res.json({
        id: req.params.id,
        post: "글내용" + req.params.id,
        re: "댓글" + req.params.reid,
    });
});

app.delete('/posts/:id/replies/"reid', function (req, res) {
    res.json({ msg: 'success' });
});
// POST 127.0.0.1:8080/posts/3/replies : 게시글 3번에 댓글 작성하기 (모르겠는데 완)
// GET 127.0.0.1:8080/posts/3/replies : 게시글 3번의 댓글 리스트 가져오기 (완)
// DELETE 127.0.0.1:8080/posts/3/replies/:re_id : 게시글 3번의 댓글 한 개 삭제하기 (완)

// method url
// GET 127.0.0.1:8080/posts : 포스트 리스트 가져오기
// POST 127.0.0.1:8080/posts : 포스트 게시하기
// GET 127.0.0.1:8080/posts/1 : 1번 포스트 가져오기
// DELETE 127.0.0.1:8080/posts/1 : 1번 포스트 삭제

app.listen(8080, function (){
    console.log("listening on 8080")
});