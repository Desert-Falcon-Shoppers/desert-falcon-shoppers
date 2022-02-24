shop_session.delete("/:id", async (req, res, next) => {
  try {
    const shopSession = await deleteShopSession(req.params.id);
    res.delete(shopSession);
  } catch (error) {
    next(error);
  }
});
